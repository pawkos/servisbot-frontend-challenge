# Welcome!
Thank you for taking the time to participate in this code challenge!

Feel free to fork this repo, or create your own repo and complete the task below.

## Note
* You are free to use whatever technologies you wish to complete the task
* You are encouraged to modify the provided data to suit your application needs
* You are **not** required to produce a production ready application, this is a chance to showcase your abilities - so do try show what you know!
* You are **not** required to write any backend apis - you can create an application layer that returns data from the provided (or your own modified) data structures
* Comments or notes are more than welcome

## Introduction

Within this repo, you will find a **data** directory. This contains some dummy data that you can use within your application. Please take some time to familiarize yourself with this data structure, as it may impact your choices and application significantly.


### Bot Data

A Bot definition looks like this
```json
{
  "id": "04140c19-0c46-43c6-8e78-f459cd3b3370",       // Un-Mutable Required UUID
  "name": "Bot One",                                  // Mutable Required String
  "description": "First Bot",                         // Mutable Optional String
  "status": "DISABLED",                               // Mutable Required String Enum ["DISABLED", "ENABLED", "PAUSED"]
  "created": 1713809849892                            // Un-Mutable Required Epoch Timestamp
}
```

### Endpoint Data

An Endpoint definition looks like this
```json
{
  "id": "6f4fdfd9-da33-4711-9386-579e8101dc43",       // Un-Mutable Required UUID
  "name": "Endpoint One",                             // Mutable Required String
  "description": "First Endpoint",                    // Mutable Optional String
  "bot": "Bot One",                                   // Mutable Required String - references a unique bot
  "created": 1713773401591                            // Un-Mutable Required Epoch Timestamp
}
```

### Log Data

A Log definition looks like this
```json
{
  "id": "a3922ad6-49ed-4cf3-8293-cc4d58a5d4c9",        // Un-Mutable Required UUID
  "created": "2024-04-22T14:14:14.926Z",               // Un-Mutable Required ISO Timestamp
  "message": "Some Message",                           // Mutable Required String
  "bot": "44700aa2-cba6-43d2-9ad4-8d8a499bd356",       // Un-Mutable Required UUID - references a unique bot
  "endpoint": "e5d7874c-fd2d-41b8-abc1-2e311964ae8c"   // Un-Mutable Required UUID - references a unique endpoint
}
```

## Data relationship

The data relationship is as follows
* Bot -> many -> Endpoint
* Bot -> many -> Log
* Endpoint -> many -> Log
* Endpoint -> one -> Bot
* Log -> one -> Bot
* Log -> one -> Endpoint


## The Challenge!

Create an Application that answers the following questions
* As a user I would like to be able to view the bots in my account
* As a user I would like to be able to view the list of endpoints for a specific bot in my account
* As a user I would like to be able to view the logs for a specific bot in my account
* As a user I would like to be able to view the logs for a specific endpoint for a specific bot in my account

There are no wireframes or design specifics, you are free to create a UI/UX that makes sense to answer the above questions in an easy to use manner.
