module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "total",
    "data"
  ],
  "properties": {
    "total": {
      "$id": "#/properties/total",
      "type": "integer",
      "title": "The Total Schema",
      "default": 0,
      "examples": [
        100
      ]
    },
    "data": {
      "$id": "#/properties/data",
      "type": "array",
      "title": "The Data Schema",
      "items": {
        "$id": "#/properties/data/items",
        "type": "object",
        "title": "The Items Schema",
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
          "actor_3"
        ],
        "properties": {
          "title": {
            "$id": "#/properties/data/items/properties/title",
            "type": "string",
            "title": "The Title Schema",
            "default": "",
            "examples": [
              "Basic Instinct"
            ],
            "pattern": "^(.*)$"
          },
          "release_year": {
            "$id": "#/properties/data/items/properties/release_year",
            "type": "string",
            "title": "The Release_year Schema",
            "default": "",
            "examples": [
              "1992"
            ],
            "pattern": "^(.*)$"
          },
          "fun_facts": {
            "$id": "#/properties/data/items/properties/fun_facts",
            "type": "string",
            "title": "The Fun_facts Schema",
            "default": "",
            "examples": [
              "The Steinhart Aquarium is home to over 38,000 animals, which represent more than 900 species."
            ],
            "pattern": "^(.*)$"
          },
          "production_company": {
            "$id": "#/properties/data/items/properties/production_company",
            "type": "string",
            "title": "The Production_company Schema",
            "default": "",
            "examples": [
              "Carolco Pictures"
            ],
            "pattern": "^(.*)$"
          },
          "distributor": {
            "$id": "#/properties/data/items/properties/distributor",
            "type": "string",
            "title": "The Distributor Schema",
            "default": "",
            "examples": [
              "TriStar Pictures"
            ],
            "pattern": "^(.*)$"
          },
          "director": {
            "$id": "#/properties/data/items/properties/director",
            "type": "string",
            "title": "The Director Schema",
            "default": "",
            "examples": [
              "Paul Verhoeven"
            ],
            "pattern": "^(.*)$"
          },
          "writer": {
            "$id": "#/properties/data/items/properties/writer",
            "type": "string",
            "title": "The Writer Schema",
            "default": "",
            "examples": [
              "Joe Eszterhas"
            ],
            "pattern": "^(.*)$"
          },
          "actor_1": {
            "$id": "#/properties/data/items/properties/actor_1",
            "type": "string",
            "title": "The Actor_1 Schema",
            "default": "",
            "examples": [
              "Michael Douglas"
            ],
            "pattern": "^(.*)$"
          },
          "actor_2": {
            "$id": "#/properties/data/items/properties/actor_2",
            "type": "string",
            "title": "The Actor_2 Schema",
            "default": "",
            "examples": [
              "Sharon Stone"
            ],
            "pattern": "^(.*)$"
          },
          "actor_3": {
            "$id": "#/properties/data/items/properties/actor_3",
            "type": "string",
            "title": "The Actor_3 Schema",
            "default": "",
            "examples": [
              "George Dzundza"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    }
  }
}