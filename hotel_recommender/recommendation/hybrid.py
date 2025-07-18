import pandas as pd
from .user_profile import user_profile

def recommend_hotels(custom_filters=None):
    df = pd.read_csv("recommendation/hotels.csv")

    # Use filters from query params if provided
    liked_locations = custom_filters.get("liked_locations", user_profile["liked_locations"])
    preferred_price = custom_filters.get("preferred_price", user_profile["preferred_price"])
    interested_in = custom_filters.get("interested_in", user_profile["interested_in"])

    def score(hotel):
        score = 0
        if hotel["location"] in liked_locations:
            score += 2
        if hotel["price"] == preferred_price:
            score += 1
        for feature in interested_in:
            if feature in hotel["features"]:
                score += 1
        return score

    df["score"] = df.apply(score, axis=1)
    df_sorted = df.sort_values(by=["score", "rating"], ascending=False)
    return df_sorted.head(5).to_dict(orient="records")
