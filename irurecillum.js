import firebase from "firebase/app";
import "firebase/firestore";

const getLeaderboardData = async () => {
  const db = firebase.firestore();
  const querySnapshot = await db.collection("leaderboard").orderBy("score", "desc").limit(10).get();
  return querySnapshot.docs.map(doc => doc.data());
};

const showLeaderboard = async () => {
  try {
    const leaderboardData = await getLeaderboardData();
    const formattedLeaderboard = leaderboardData.map((data, index) => ({
      rank: index + 1,
      name: data.name,
      score: data.score,
    }));
    console.table(formattedLeaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
  }
};

showLeaderboard();
