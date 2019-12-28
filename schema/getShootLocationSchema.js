module.exports = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "title",
      "release_year",
      "fun_facts",
      "production_company",
      "distributor",
      "director",
      "writer",
      "actor_1",
      "actor_2",
      "actor_3",
      "locations"
    ],
    "properties": {
      "title": {
        "$id": "#/properties/title",
        "type": ["string", null],
        "title": "The Title Schema",
        "default": "",
        "examples": [
          "Basic Instinct"
        ],
        "pattern": "^(.*)$"
      },
      "release_year": {
        "$id": "#/properties/release_year",
        "type": ["string", null],
        "title": "The Release_year Schema",
        "default": "",
        "examples": [
          "1992"
        ],
        "pattern": "^(.*)$"
      },
      "fun_facts": {
        "$id": "#/properties/fun_facts",
        "type": ["string", null],
        "title": "The Fun_facts Schema",
        "default": "",
        "examples": [
          "The Steinhart Aquarium is home to over 38,000 animals, which represent more than 900 species."
        ],
        "pattern": "^(.*)$"
      },
      "production_company": {
        "$id": "#/properties/production_company",
        "type": ["string", null],
        "title": "The Production_company Schema",
        "default": "",
        "examples": [
          "Carolco Pictures"
        ],
        "pattern": "^(.*)$"
      },
      "distributor": {
        "$id": "#/properties/distributor",
        "type": ["string", null],
        "title": "The Distributor Schema",
        "default": "",
        "examples": [
          "TriStar Pictures"
        ],
        "pattern": "^(.*)$"
      },
      "director": {
        "$id": "#/properties/director",
        "type": ["string", null],
        "title": "The Director Schema",
        "default": "",
        "examples": [
          "Paul Verhoeven"
        ],
        "pattern": "^(.*)$"
      },
      "writer": {
        "$id": "#/properties/writer",
        "type": ["string", null],
        "title": "The Writer Schema",
        "default": "",
        "examples": [
          "Joe Eszterhas"
        ],
        "pattern": "^(.*)$"
      },
      "actor_1": {
        "$id": "#/properties/actor_1",
        "type": ["string", null],
        "title": "The Actor_1 Schema",
        "default": "",
        "examples": [
          "Michael Douglas"
        ],
        "pattern": "^(.*)$"
      },
      "actor_2": {
        "$id": "#/properties/actor_2",
        "type": ["string", null],
        "title": "The Actor_2 Schema",
        "default": "",
        "examples": [
          "Sharon Stone"
        ],
        "pattern": "^(.*)$"
      },
      "actor_3": {
        "$id": "#/properties/actor_3",
        "type": ["string", null],
        "title": "The Actor_3 Schema",
        "default": "",
        "examples": [
          "George Dzundza"
        ],
        "pattern": "^(.*)$"
      },
      "locations": {
        "$id": "#/properties/locations",
        "type": ["string", null],
        "title": "The Locations Schema",
        "default": "",
        "examples": [
          "[\"Yerba Buena Center for the Arts\", \"Transbay Terminal (Mission Street at 1st Street)\", \"Tosca Café (242 Columbus Avenue)\", \"Steinhart Aquarium (California Academy of Sciences, Golden Gate Park)\", \"Raw Hide II (280 Seventh Street)\", \"Pier 7 (The Embarcadero)\", \"Kearney Street (Telegraph Hill)\", \"Hall of Justice (850 Bryant Street)\", \"2930 Vallejo Street\", \"Chinatown\", \"Gibb Street (Chinatown)\", \"1158-70 Montgomery Street\", \"2104 Broadway\", \"1158-70 Montgomery Street\", \"Hall of Justice (850 Bryant Street)\", \"Pier 7 (The Embarcadero)\", \"Steinhart Aquarium (California Academy of Sciences, Golden Gate Park)\", \"2104 Broadway\", \"Kearney Street (Telegraph Hill)\", \"Chinatown\", \"Yerba Buena Center for the Arts\", \"Transbay Terminal (Mission Street at 1st Street)\", \"Tosca Café (242 Columbus Avenue)\", \"Raw Hide II (280 Seventh Street)\", \"2930 Vallejo Street\", \"Gibb Street (Chinatown)\"]"
        ],
        "pattern": "^(.*)$"
      }
    }
  }