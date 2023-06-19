import json
from random import randint

club_id = randint(0, 255)

club_info = {
    # Club name and short + long description.
    "name": None,
    "blurb": None,  # Displayed in club card
    "desc": None,   # Displayed in club page in directory

    # Direct links only; use image hosting services or Google Drive (see Markdown for more information)
    "logo link": None,  # club logo for club card and desc
    "background link": None,  # club background cover for club card and full page desc

    # Recommended to shorten the links here (see Markdown for more information)
    "website link": None,  # club website if they have one
    "entry link": None,  # applications, interest forms, or classroom pages

    # CDN stands for Content Delivery Network - See markdown for details
    # The default font is Lexend Deca. Replace these with your font name and a link to the CDN.
    "font": {
        "name": "Lexend Deca",
        "cdn": '''https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap''',
    },

    # Any of these that are left blank will not be displayed, dw :)
    # Include a newline "\n" to indicate shared positions. (ex: "Andy Gonzalez\nYara Aguilar")
    "leadership": {
        "president": None,
        "vice-president": None,
        "secretary": None,
        "treasurer": None,
        "publicist": None,
    },

    # Include a newline "\n" if including multiple advisors. (ex: "Dr. Michael\nMr. Zhao") :(
    # NOTE: unless if teachers opt to doing so, do not use their first names.
    "advisors": None,

    # Replace the days that your club holds meetings in with True
    "meeting dates": {
        "Monday": False,
        "Tuesday": False,
        "Wednesday": False,
        "Thursday": False,
        "Friday": False,
    },

    # specify how often your club meets (daily, weekly, biweekly, xth day, etc)
    "meeting frequency": None,

    # The following options affect the display of the button on the site that allows members to join your club.
    #        "accepting members": If set to false and your club has no  requisites, the button will not appear.
    #                             Otherwise, it will read "Details" instead.
    #        "has application": If set to false, the button will read "Join Club". Otherwise, it will read "Apply"

    # Set to False if your club is not welcoming any more members.
    "accepting members": True,
    # Set to True if your club requires an application.
    "has application": False,
    # Detail any requisites for your club.
    "club requisites": None,
}

with open("clubs.json", "r") as source_file:
    club_database = json.load(source_file)
    source_file.close()

taken_ids = list(club_database.keys())

if club_id not in list(taken_ids):
    club_database.update({club_id: club_info})
else:
    club_id = randint(0, 255)

with open("clubs.json", "w") as target_file:
    json.dump(club_database, target_file)
    target_file.close()
