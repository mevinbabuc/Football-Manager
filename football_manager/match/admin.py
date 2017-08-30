from django.contrib import admin

from .models import Match, Player, Team, Sponsor

admin.site.register(Team)
admin.site.register(Player)
admin.site.register(Match)
admin.site.register(Sponsor)
