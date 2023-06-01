import axios from "axios";

const useLiveStatus = async (channelId, username) => {
  try {
    const apiKey = "AIzaSyBwVPJTIEKD7VaulaaPKwuYrHeB7Bu3T4U";
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          q: username,
          channelId: channelId,
          type: "live",
          maxResults: 1,
          key: apiKey,
          part: "id",
          part: "snippet",
        },
      }
    );

    const { items } = response.data;

    if (items.snippet.liveBroadcastContent == "live") {
      console.log("Usuário está ao vivo");
      return { liveID: items.id.videoId, live: true };
    } else {
      console.log("Usuário não está ao vivo");
      return false;
    }
  } catch (error) {
    console.error("Erro ao obter status da live:", error);
    return false;
  }
};

const getChannelId = async (username) => {
  try {
    const apiKey = "AIzaSyBwVPJTIEKD7VaulaaPKwuYrHeB7Bu3T4U";
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          type: "channel",
          q: username,
          maxResults: 1,
          part: "snippet",
          part: "id",
          key: apiKey,
        },
      }
    );

    const { items } = response.data;

    if (items.length > 0) {
      const channelId = items[0].id.channelId;
      return channelId;
    } else {
      console.log("Nenhum canal encontrado para o usuário fornecido.");
      return null;
    }
  } catch (error) {
    console.error("Erro ao obter o ID do canal:", error);
    return null;
  }
};

const checkLiveStatusByUsername = async (username) => {
  const channelId = await getChannelId(username);

  if (channelId) {
    const isLive = await useLiveStatus(channelId, username);
    return isLive;
  } else {
    console.log("Não foi possível verificar o status 'Ao vivo'.");
    return false;
  }
};

export default checkLiveStatusByUsername;
