// hooks/useBlogData.js
import { useState, useEffect } from "react";
import { BLOG_POSTS } from "../Data/bPageData";

const STATIC_MODE = true; 

const SHOPIFY_CONFIG = {
  storeDomain: "your-store.myshopify.com",
  storefrontToken: "your-storefront-token",
  blogHandle: "lingerie-guide",
};

async function fetchFromShopify() {
  const query = `{
    blog(handle: "${SHOPIFY_CONFIG.blogHandle}") {
      articles(first: 20) {
        edges {
          node {
            id title handle excerpt tags
            metafield(namespace: "custom", key: "read_time") { value }
          }
        }
      }
    }
  }`;

  const res = await fetch(
    `https://${SHOPIFY_CONFIG.storeDomain}/api/2024-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_CONFIG.storefrontToken,
      },
      body: JSON.stringify({ query }),
    }
  );

  const { data } = await res.json();
  return (data?.blog?.articles?.edges || []).map((edge) => ({
    id: edge.node.id,
    category: edge.node.tags[0] || "Guide",
    title: edge.node.title,
    subtitle: edge.node.excerpt || "",
    readTime: edge.node.metafield?.value || "3 min read",
    slug: edge.node.handle,
    emoji: "🌸",
    emojiColor: "#FBEAF0",
    comingSoon: edge.node.tags.includes("coming-soon"),
  }));
}

export function useBlogData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setPosts(STATIC_MODE ? BLOG_POSTS : await fetchFromShopify());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { posts, loading, error };
}