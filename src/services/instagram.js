import axios from "axios";

export const getRecentInstagram = async (count) => {
  const url = `https://www.instagram.com/graphql/query/?query_hash=9dcf6e1a98bc7f6e92953d5a61027b98&variables={"id":"6705936200","first":"${count}"}`;

  const raw = await axios.get(url);
  const recent = raw.data.data.user.edge_owner_to_timeline_media.edges;

  let list = recent.map((item) => {
    return {
      url: `https://www.instagram.com/p/${item.node.shortcode}/`,
      thumbnail: item.node.thumbnail_src,
    };
  });

  return list;
};
