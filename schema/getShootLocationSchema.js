module.exports = {
    "definitions": {},
    "$schema": "json_draft_7",
    "$id": "inheritance_used_here",
    "type": "array",
    "title": "The Root Schema",
    "items": {
      "$id": "#/items",
      "type": "object",
      "title": "The Items Schema",
      "required": [
        "title"
      ],
      "properties": {
        "title": {
          "$id": "#/items/properties/title",
          "type": "string",
          "title": "The Title Schema",
          "default": "",
          "examples": [
            "180"
          ],
          "pattern": "^(.*)$"
        },
        "release_year": {
          "$id": "#/items/properties/release_year",
          "type": "string",
          "title": "The Release_year Schema",
          "default": "",
          "examples": [
            "2011"
          ],
          "pattern": "^(.*)$"
        },
        "fun_facts": {
          "$id": "#/items/properties/fun_facts",
          "type": "null",
          "title": "The Fun_facts Schema",
          "default": null,
          "examples": [
            null
          ]
        },
        "production_company": {
          "$id": "#/items/properties/production_company",
          "type": "string",
          "title": "The Production_company Schema",
          "default": "",
          "examples": [
            "SPI Cinemas"
          ],
          "pattern": "^(.*)$"
        },
        "distributor": {
          "$id": "#/items/properties/distributor",
          "type": "null",
          "title": "The Distributor Schema",
          "default": null,
          "examples": [
            null
          ]
        },
        "director": {
          "$id": "#/items/properties/director",
          "type": "string",
          "title": "The Director Schema",
          "default": "",
          "examples": [
            "Jayendra"
          ],
          "pattern": "^(.*)$"
        },
        "writer": {
          "$id": "#/items/properties/writer",
          "type": "string",
          "title": "The Writer Schema",
          "default": "",
          "examples": [
            "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba"
          ],
          "pattern": "^(.*)$"
        },
        "actor_1": {
          "$id": "#/items/properties/actor_1",
          "type": "string",
          "title": "The Actor_1 Schema",
          "default": "",
          "examples": [
            "Siddarth"
          ],
          "pattern": "^(.*)$"
        },
        "actor_2": {
          "$id": "#/items/properties/actor_2",
          "type": "string",
          "title": "The Actor_2 Schema",
          "default": "",
          "examples": [
            "Nithya Menon"
          ],
          "pattern": "^(.*)$"
        },
        "actor_3": {
          "$id": "#/items/properties/actor_3",
          "type": "string",
          "title": "The Actor_3 Schema",
          "default": "",
          "examples": [
            "Priya Anand"
          ],
          "pattern": "^(.*)$"
        },
        "locations": {
          "$id": "#/items/properties/locations",
          "type": "string",
          "title": "The Locations Schema",
          "default": "",
          "examples": [
            "[\"Epic Roasthouse (399 Embarcadero)\", \"Mason & California Streets (Nob Hill)\", \"Justin Herman Plaza\", \"200 block Market Street\", \"City Hall\", \"Polk & Larkin Streets\", \"Randall Museum\", \"555 Market St.\", \"Mason & California Streets (Nob Hill)\", \"200 block Market Street\", \"Justin Herman Plaza\", \"Epic Roasthouse (399 Embarcadero)\", \"Polk & Larkin Streets\", \"City Hall\", \"Randall Museum\", \"555 Market St.\"]"
          ],
          "pattern": "^(.*)$"
        }
      }
    }
  }