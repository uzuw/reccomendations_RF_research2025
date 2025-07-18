from django.http import JsonResponse
from .hybrid import recommend_hotels

def get_recommendations(request):
    # Get filters from query parameters
    location = request.GET.getlist("location") or None
    price = request.GET.get("price") or None
    features = request.GET.getlist("feature") or None

    # Build dynamic filter dict
    filters = {}
    if location:
        filters["liked_locations"] = location
    if price:
        filters["preferred_price"] = price
    if features:
        filters["interested_in"] = features

    hotels = recommend_hotels(custom_filters=filters)
    return JsonResponse({"recommendations": hotels})
