![Focallocal logo](http://news.focallocal.org/wp-content/uploads/2015/02/focallocal-very-low-res1-min.png)

This is the base branch for the rnflmaps project.


# Contribution Guide

The project is based on [Meteor](https://www.meteor.com/) and [React Native](https://facebook.github.io/react-native//). (*try a [**todo-list tutorial**](https://www.meteor.com/tutorials/react/creating-an-app) if you've never used one of them*)

## Getting Started:

1) [Join our Google calendar](https://calendar.google.com/calendar?cid=dDFranFza2RmOXBzb2JpM291NnVmdjc4NXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ), and set yourself a regular reminder to visit it add the hours you want to work on this project this week, or month. This makes it much easier for the team to arrange collaborations, and most people find volunteer commitments always getting get put off if they aren't scheduled. Using these steps will help you keep with the commitment you want to make. 
2) Head to our [Slack channel](https://focallocal.slack.com) and say Hi in the Introductions Slack channel, and give other devs there an intro to your background
3) Read through this readme guide in our Github to get an idea of the project
4) Set up a local dev enviroment (most of us use whatever we like), let us know if you have difficulties, a lot of people find setting up fiddly
5) Once setup, [jump onto Trello](https://trello.com/invite/b/PFj7RlgM/a12e9b4bdc6fff4a5e7439754c9a7e3b/focallocalorg), assign yourself your first mission and of you're ready to being move it into the sprint queue

## Workflow:

1) Begin each work session by reviewing others pull requests in Github and commenting on your findings. It helps to keep everyone up to date with whats going on and create a self-checking community. If you're the 3rd dev commenting/checking please tag @AndyatFocallocal to merge the PR.
2) Visit Trello and use the react native filter to hide Missions for other teams
3) Use filters in Trello to see which Cards/Missions are most needing your attention, or grab a Mission from Quick Bug Squashing
4) Grab a card, assign yourself to it and move it into correct 'Sprint' List - to prevent two people working on the same issue/mission
5) When complete and your PR is awaiting review, move the card into 'Missions Complete', also click the link inside the card to close the issue in Github

Issues are created on Github, and then get automatically posted on Trello (with a delay up to 15mins). Here's direct links, i suggest adding them to your browsers bookmarks to make navigation easy:
https://github.com/focallocal/rnflmaps
https://trello.com/b/PFj7RlgM/focallocalorg
https://focallocal.slack.com

## Setting Up The Development Environment

1. install react native

    https://facebook.github.io/react-native/docs/getting-started

2. create a fork of this repository and then

    `git clone https://github.com/your-github-username/rnflmaps`

3. Set up git

      - `git remote add upstream https://github.com/focallocal/rnflmaps`
      ```
        // make sure there are 2 remotes (origin that points to your fork and upstream for the original repo)
        git remote -v
      ```

    - **every time you start working on a new feature, run: `git pull upstream master` which ensures you are always working with the most updated version of the project.**

    - create a new branch `git checkout -b new-feature-name`

4. run the project

    ```javascript
       yarn
       npm start
       react-native run-ios // In a new tab to run ios
       react-native run-android // To run android
    ```

5. make changes

6. go to github and create a new pull request from your fork (make sure it's against the rnflmaps/master branch)

## Working On Issues

Issues can be found on our Trello board which gives a more visual representation of progress than Github. The two currently active lists on Trello will be the 1st version (example v0.1) reading from left to right, and also the Quick Bug Squashing List: [**Trello**](https://trello.com/b/PFj7RlgM/focallocalorg) and not github (use github only to open issues!).

*if you decide to work on an issue please click 'members' and add your name to it, then move it into the 'sprint' queue. You can also use filters to see react native only issues (missions). (Don't forget to move it into the 'complete' list when finished, and also close the issue in Github.

---

## **Gotchas**

* React-hot-loader will only hot-reload for changes that are made inside the <App /> component. This is the default behavior but I've added this note just to make sure you are aware of this.

* Both of the maps (gathering and brightertomorrow) are using the same code base - we differentiate their strings by using different i18n files for each.

---

## Core Design Considerations

Goal for users: **Posting something new onto the map**

Platform goal: **Growing a positive and active community focused on the subject chosen for that map**

When users visit the map the should feel: **Connected to a Community**

The platform should be:

* **positive**

* **action focused**

* **welcoming and cheerful**


## Vision for the Maps Platform

We are building two maps together to ensure the platform remains focused on the Core Design Considerations, rather than wondering towards one specific issue. This keeps community at the center of our build, and ensures the map can become a useful open source platform for others later

Upon reaching v1: Our development of the Brighter Tomorrow Map will slow, the platform will be released as open source for others to use. The Focallocal.org map build will continue and specialize to better integrate with the other areas of the Focallocal.org platform

### Design Constraints

The Orange main menu and its text 'Focallocal' are used in all projects built by the Focallocal Public Happiness community, so members can easily identify the project, and to maintain the positive and cheerful atmosphere in all related projects.

### Two Maps

We have two maps based on the same codebase at the moment. We're keeping the code merged until v0.3 as it helps to keep them both focused on their core ethos 'community connection', and enables them both to launch at the same time. The Homelessness map, and the community hub that will push it out to help people around the world.

Map 1 - The Brighter Tomorrow Map focuses on reducing homelessness through community connection.

Map 2 - Focallocal.org focuses on connecting people to take action where they live and improve well-being, that includes by building projects like The Brighter Tomorrow Map, which is our flagship project

In GitHub you'll find two main branches 'master' and 'fl-sleeper'. Any differences between the two are stated in our language plugin i18n. All text visible to users should be set in i18n so it can be changed easily between the two (at some point in the future we'll probably turn this into a user friendly backend).

When code you are working on is/needs to be different in the two maps, the code to change can be found in i18n. This is generally text, links and images. (search i18n in the project to find its folder).

## Hosting

we have three hosts;

vultr.com
wehostinghub.com
digitalocean.com

they are all being routed through cloudflare, but the nameservers for Vultr.com are the only ones pointing at cloudflare's nameservers.

We have our domain registered at Hihosting.co.uk, and the nameservers point to cloudflare.

## Other Areas of Focallocal.org

Focallocal.org is building towards a decentralized community where anyone can join to work on projects and take action to build a friendlier happier and safer world around them. Its a hub for our volunteer community to coordinate, collaborate, and begin to grow. Its also not very good right now (i built most of it (Andy)) and it is fragmented.

What it is, is a minimum functional platform to support a community who will redesign and improve it to meet their needs as they grow; its also a pool of skills, like marketing experts, graphic designers, etc, to contribute to both maps, and many other Public Happiness projects built by our community. Anyone joining in one of our projects to create a happier world is a member of the Focallocal Community and you're all also welcome to improve other areas of focallocal.org - it's your platform

## Docus

if you have any need to edit Docus, most files including home directory can be found here: https://github.com/focallocal/fl-maps/blob/master/imports/client/ui/app.js

Its repo is here: https://github.com/sylque/dcs-discourse-plugin/issues
and you need to tag @sylque in the repo to discuss development
