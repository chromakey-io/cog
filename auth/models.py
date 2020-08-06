from starlette.authentication import BaseUser

class TokenUser(BaseUser):
    def __init__(self, payload: dict) -> None:
        self.payload = payload

    @property
    def is_authenticated(self) -> bool:
        return True

    @property
    def display_name(self) -> str:
        return self.payload
    
    @property
    def identity(self) -> str:
        return self.payload.get('uid')