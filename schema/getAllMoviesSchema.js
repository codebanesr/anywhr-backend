module.exports = {
    "definitions": {},
    "$schema": "json_draft_7",
    "$id": "inheritance_used_here",
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
                "180"
              ],
              "pattern": "^(.*)$"
            },
            "release_year": {
              "$id": "#/properties/data/items/properties/release_year",
              "type": "string",
              "title": "The Release_year Schema",
              "default": "",
              "examples": [
                "2011"
              ],
              "pattern": "^(.*)$"
            },
            "fun_facts": {
              "$id": "#/properties/data/items/properties/fun_facts",
              "type": "null",
              "title": "The Fun_facts Schema",
              "default": null,
              "examples": [
                null
              ]
            },
            "production_company": {
              "$id": "#/properties/data/items/properties/production_company",
              "type": "string",
              "title": "The Production_company Schema",
              "default": "",
              "examples": [
                "SPI Cinemas"
              ],
              "pattern": "^(.*)$"
            },
            "distributor": {
              "$id": "#/properties/data/items/properties/distributor",
              "type": "null",
              "title": "The Distributor Schema",
              "default": null,
              "examples": [
                null
              ]
            },
            "director": {
              "$id": "#/properties/data/items/properties/director",
              "type": "string",
              "title": "The Director Schema",
              "default": "",
              "examples": [
                "Jayendra"
              ],
              "pattern": "^(.*)$"
            },
            "writer": {
              "$id": "#/properties/data/items/properties/writer",
              "type": "string",
              "title": "The Writer Schema",
              "default": "",
              "examples": [
                "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba"
              ],
              "pattern": "^(.*)$"
            },
            "actor_1": {
              "$id": "#/properties/data/items/properties/actor_1",
              "type": "string",
              "title": "The Actor_1 Schema",
              "default": "",
              "examples": [
                "Siddarth"
              ],
              "pattern": "^(.*)$"
            },
            "actor_2": {
              "$id": "#/properties/data/items/properties/actor_2",
              "type": "string",
              "title": "The Actor_2 Schema",
              "default": "",
              "examples": [
                "Nithya Menon"
              ],
              "pattern": "^(.*)$"
            },
            "actor_3": {
              "$id": "#/properties/data/items/properties/actor_3",
              "type": "string",
              "title": "The Actor_3 Schema",
              "default": "",
              "examples": [
                "Priya Anand"
              ],
              "pattern": "^(.*)$"
            }
          }
        }
      }
    }
  }