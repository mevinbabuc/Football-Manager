from django.apps import AppConfig


class MatchConfig(AppConfig):
    name = 'football_manager.match'
    verbose_name = "Matches"

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """
        pass
