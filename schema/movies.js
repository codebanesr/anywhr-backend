module.exports = {
    "definitions": {},
    "$schema": "json_draft_7",
    "$id": "inheritance_used_here",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "title"
    ],
    "properties": {
      "title": {
        "$id": "#/properties/title",
        "type": "string",
        "title": "The Title Schema",
        "default": "",
        "examples": [
          "180"
        ],
        "pattern": "^(.*)$"
      },
      "release_year": {
        "$id": "#/properties/release_year",
        "type": "string",
        "title": "The Release_year Schema",
        "default": "",
        "examples": [
          "2011"
        ],
        "pattern": "^(.*)$"
      },
      "fun_facts": {
        "$id": "#/properties/fun_facts",
        "type": "null",
        "title": "The Fun_facts Schema",
        "default": null,
        "examples": [
          null
        ]
      },
      "production_company": {
        "$id": "#/properties/production_company",
        "type": "string",
        "title": "The Production_company Schema",
        "default": "",
        "examples": [
          "SPI Cinemas"
        ],
        "pattern": "^(.*)$"
      },
      "distributor": {
        "$id": "#/properties/distributor",
        "type": "null",
        "title": "The Distributor Schema",
        "default": null,
        "examples": [
          null
        ]
      },
      "director": {
        "$id": "#/properties/director",
        "type": "string",
        "title": "The Director Schema",
        "default": "",
        "examples": [
          "Jayendra"
        ],
        "pattern": "^(.*)$"
      },
      "writer": {
        "$id": "#/properties/writer",
        "type": "string",
        "title": "The Writer Schema",
        "default": "",
        "examples": [
          "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba"
        ],
        "pattern": "^(.*)$"
      },
      "actor_1": {
        "$id": "#/properties/actor_1",
        "type": "string",
        "title": "The Actor_1 Schema",
        "default": "",
        "examples": [
          "Siddarth"
        ],
        "pattern": "^(.*)$"
      },
      "actor_2": {
        "$id": "#/properties/actor_2",
        "type": "string",
        "title": "The Actor_2 Schema",
        "default": "",
        "examples": [
          "Nithya Menon"
        ],
        "pattern": "^(.*)$"
      },
      "actor_3": {
        "$id": "#/properties/actor_3",
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