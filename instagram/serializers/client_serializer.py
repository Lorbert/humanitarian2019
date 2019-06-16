from instagram.models import Post


class ClientSerializer:

    def __init__(self, client_data):
        self.client_data = client_data
        self.errors = {}
        self._is_valid_called = False
        self._is_valid = False

    def is_valid(self):
        if ('location' not in self.client_data
                or self.client_data['location'] is None
                or 'latitude' not in self.client_data['location']
                or 'longitude' not in self.client_data['location']):
            self.errors['location'] = 'Location needs to be in the response'
        if ('images' not in self.client_data
                or 'standard_resolution' not in self.client_data['images']
                or 'url' not in self.client_data['images']['standard_resolution']):
            self.errors['images'] = 'Images needs to be in the response'
        if 'link' not in self.client_data:
            self.errors['link'] = 'Link needs to be in the response'
        if ('user' not in self.client_data
                or 'username' not in self.client_data['user']):
            self.errors['user'] = 'User needs to be in the response'
        if 'id' not in self.client_data:
            self.errors['id'] = 'ID needs to be in the response'
        if ('caption' not in self.client_data
                or 'text' not in self.client_data['caption']):
            self.errors['caption'] = 'Caption needs to be in the response'
        if 'tags' not in self.client_data:
            self.errors['tags'] = 'Tags needs to be in the response'
        if len(self.errors.keys()) < 1:
            self._is_valid = True
        self._is_valid_called = True
        return self._is_valid

    def save(self):
        if not self._is_valid_called:
            print('Please first call is_valid()')
            return
        if not self._is_valid:
            print('Response is not valid')
            return
        if isinstance(self.client_data['tags'], list) and 'stoptextilepollution' in self.client_data['tags']:
            Post.objects.update_or_create(
                insta_id=self.client_data['id'],
                defaults={
                    'latitude': self.client_data['location']['latitude'],
                    'longitude': self.client_data['location']['longitude'],
                    'insta_username': self.client_data['user']['username'],
                    'insta_link': self.client_data['link'],
                    'insta_image_link': self.client_data['images']['standard_resolution']['url'],
                    'insta_caption': self.client_data['caption']['text'],
                }
            )
        print('saved post with link', self.client_data['link'])
