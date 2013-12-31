import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Linking,
} from "react-native";
import { colors } from "../theme";
const newsUrl =
  "https://tank01-fantasy-stats.p.rapidapi.com/getNBANews?recentNews=true&maxItems=50";
const newsOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d86b55a31emsh20bdf138bb0c79fp16104djsn08cbc3b5570f",
    "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
  },
};

const scoresUrl = "https://sportscore1.p.rapidapi.com/sports/3/events";

const scoresOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d86b55a31emsh20bdf138bb0c79fp16104djsn08cbc3b5570f",
    "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  },
};

const NewsScreen = () => {
  const [activeTab, setActiveTab] = useState("News");
  const [news, setNews] = useState([]);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(newsUrl, newsOptions);
      const data = await response.json();
      setNews(data.body);
    };
    const fetchScores = async () => {
      const response = await fetch(scoresUrl, scoresOptions);
      const data = await response.json();
      setScores(data.data);
    };
    fetchNews();
    fetchScores();
  }, []);

  console.log(
    scores,
    "scores------------------------------------------------------"
  );

  const renderNewsCard = (newsItem) => (
    <TouchableOpacity
      key={newsItem.id}
      style={styles.newsCard}
      onPress={() => Linking.openURL(newsItem.link)}
    >
      <Text style={styles.newsTitle}>{newsItem.title}</Text>
      <Text style={styles.newsDescription}>{newsItem.description}</Text>
    </TouchableOpacity>
  );

  const renderScoreCard = (scoreItem) => {
    // Define styles based on the status and winner of the game
    const cardStyles = {
      backgroundColor: scoreItem.status === "finished" ? "#f0f0f0" : "white",
      borderColor: scoreItem.status === "finished" ? "#ccc" : "blue",
    };

    // Define text color based on the winner of the game
    const titleColor = scoreItem.winner_code === 1 ? "green" : "red";

    return (
      <TouchableOpacity
        style={[styles.scoreCard, cardStyles]}
        onPress={() => {
          /* Handle card press */
        }}
      >
        <Text style={[styles.scoreTitle, { color: titleColor }]}>
          {scoreItem.name}
        </Text>

        {/* Display scores */}
        <View style={styles.scoresContainer}>
          <Text
            style={styles.scoreText}
          >{`${scoreItem.home_team.name} ${scoreItem.home_score.current}`}</Text>
          <Text
            style={styles.scoreText}
          >{`${scoreItem.away_team.name} ${scoreItem.away_score.current}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTab = (tabName) => (
    <TouchableOpacity
      key={tabName}
      style={[styles.tab, activeTab === tabName && styles.activeTab]}
      onPress={() => setActiveTab(tabName)}
    >
      <Text style={styles.tabText}>{tabName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {renderTab("News")}
        {renderTab("Scores")}
      </View>

      <View style={styles.contentContainer}>
        {activeTab === "News" ? (
          <>
            <FlatList
              data={news}
              keyExtractor={(item) => item.link}
              renderItem={({ item }) => (
                // TouchableOpacity for each news item, opening the link in the browser
                <TouchableOpacity
                  style={styles.newsCard}
                  onPress={() => {
                    Linking.openURL(item.link);
                  }}
                >
                  {/* News image */}
                  <Image
                    source={{ uri: item.image }}
                    style={styles.newsImage}
                  />

                  {/* News title */}
                  <Text style={styles.newsTitle}>{item.title}</Text>

                  {/* "See More" button */}
                  <TouchableOpacity
                    style={styles.seeMoreButton}
                    onPress={() => {
                      Linking.openURL(item.link);
                    }}
                  >
                    <Text style={styles.seeMoreButtonText}>See More</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            />
          </>
        ) : (
          <>
            <FlatList
              data={scores}
              keyExtractor={(item) => item.link}
              renderItem={renderScoreCard}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    justifyContent: "space-around",
    backgroundColor: "white",
    width: "100%",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  contentContainer: {
    padding: 20,
  },
  contentText: {
    fontSize: 18,
  },
  newsCard: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
  },
  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsDescription: {
    fontSize: 16,
  },
  seeMoreButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  seeMoreButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  scoreCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  scoresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scoreText: {
    fontSize: 16,
  },
});

export default NewsScreen;
