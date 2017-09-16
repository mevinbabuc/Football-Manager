from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


@python_2_unicode_compatible
class Group(models.Model):
    name = models.CharField(_('Name of Group'), default='', max_length=255)

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Team(models.Model):
    name = models.CharField(_('Name of Team'), blank=True, max_length=255)
    group = models.ForeignKey(Group, null=True)

    def __str__(self):
        return "{0}".format(self.name)


@python_2_unicode_compatible
class Player(models.Model):
    name = models.CharField(_('Name of Player'), blank=True, max_length=255)
    photo = models.ImageField(null=True)
    team = models.ForeignKey(Team)

    def __str__(self):
        return "{0} from {1}".format(self.name, self.team)


@python_2_unicode_compatible
class Match(models.Model):
    team_a = models.ForeignKey(Team, related_name='team_a')
    team_b = models.ForeignKey(Team, related_name='team_b')

    match_date = models.DateTimeField()

    team_a_score = models.SmallIntegerField(editable=True, null=True, blank=True)
    team_b_score = models.SmallIntegerField(editable=True, null=True, blank=True)

    winning_team = models.ForeignKey(Team, null=True, blank=True)

    def __str__(self):
        return "{0} vs {1}".format(self.team_a.name, self.team_b.name)

    def save(self):

        if (self.team_a_score or self.team_a_score == 0) and self.team_b_score in ['', None]:
            self.team_b_score = 0

        if (self.team_b_score or self.team_b_score == 0) and self.team_a_score in ['', None]:
            self.team_a_score = 0

        super().save()


@python_2_unicode_compatible
class Sponsor(models.Model):
    name = models.CharField(_('Name of Sponsor'), default='', max_length=255)
    logo = models.ImageField()

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Standings(models.Model):
    place = models.PositiveIntegerField("Team ranking")
    team = models.ForeignKey(Team)
    gp = models.PositiveIntegerField("Games Played", default=0)

    wins = models.PositiveIntegerField("Total wins", default=0)
    draws = models.PositiveIntegerField("Total draws", default=0)
    losses = models.PositiveIntegerField("Total loss", default=0)

    goals_f = models.PositiveIntegerField("Goals F", default=0)
    goals_a = models.PositiveIntegerField("Goals A", default=0)
    goals_d = models.IntegerField("Goals D", default=0)

    points = models.PositiveIntegerField("Points", default=0)

    class Meta:
        ordering = ['place']

    def __str__(self):
        return "Team {0} - rank {1}".format(self.team, self.place)


@python_2_unicode_compatible
class Rule(models.Model):
    rule = models.TextField('rule')

    def __str__(self):
        return self.rule

