class InstagramApiClient:

    @classmethod
    def get_posts(cls):
        return {
            "data": [
                {
                    "comments": {
                        "count": 0
                    },
                    "caption": {
                        "created_time": "1296710352",
                        "text": "Inside le truc #foodtruck",
                        "from": {
                            "username": "kevin",
                            "full_name": "Kevin Systrom",
                            "type": "user",
                            "id": "3"
                        },
                        "id": "26621408"
                    },
                    "likes": {
                        "count": 15
                    },
                    "link": "http://instagr.am/p/BWrVZ/",
                    "user": {
                        "username": "kevin",
                        "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
                        "id": "3"
                    },
                    "created_time": "1296710327",
                    "images": {
                        "low_resolution": {
                            "url": "http://media-cdn.tripadvisor.com/media/photo-s/01/40/07/74/nadi.jpg",
                            "width": 306,
                            "height": 306
                        },
                        "thumbnail": {
                            "url": "http://media-cdn.tripadvisor.com/media/photo-s/01/40/07/74/nadi.jpg",
                            "width": 150,
                            "height": 150
                        },
                        "standard_resolution": {
                            "url": "http://media-cdn.tripadvisor.com/media/photo-s/01/40/07/74/nadi.jpg",
                            "width": 612,
                            "height": 612
                        }
                    },
                    "type": "image",
                    "users_in_photo": [],
                    "filter": "Earlybird",
                    "tags": ["foodtruck"],
                    "id": "22721881",
                    "location": {
                        "latitude": 37.778720183610183,
                        "longitude": -122.3962783813477,
                        "id": "520640",
                        "street_address": "",
                        "name": "Le Truc"
                    }
                },
            ]
        }
