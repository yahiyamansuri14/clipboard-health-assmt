# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

My Breakdown is below: -

1. Here I'm assuming that we are using either mysql / postgreSQL with Node JS for which the best ORM to work with is Sequelize.
and as we will be working with ORM directly then we don't have to implicitly create a new column in database table.
2. Assuming the method / API inserts the Agents into the table is named as   `insertAgents`.
Ticket 1 : -
title: - Perform code changes for the new column `custom_agent_id` in `Agents` model.
description : - perform the necessary code changes for the new column `custom_agent_id` in `Agents` model.
                You have to create a new object with name custom_agent_id in the Agents model, make sure to add 
                UNIQUE and NOT NULL as well DEFAULT constrains.
Resources: - you can find the  `Agents` model in the models folder. and for inserting the code you can refer to the 
             official sequelize documentation. Link : - sequelize.org/docs/v6/core-concepts/model-basics/
Time / Efforts : - Assuming you need to read the documentation it will not take more than 4 hours.
Acceptance Criteria : - write a unit test that returns structure of Agents table and in that result a column names 
                    custom_agent_id should appear.

Ticket 2 : -
title : - Code change in `insertAgents` method.
description : - you need to make code changes as per the below steps in `insertAgents` method.
1. Generate a custom id for the Agent make sure it is unique and does not appear before in the Agents table.
    if you want to avoid checking each time in DB to make sure custom_id is unique try to work with moment library
    and make a possible combination with current timestamp.
(if Facilities wants to enter the id's by themselve then you have to perform some work on UI end too).
2. insert the custom_id with the data you received in the request body for the Agent and pass it to `insertAgents` method. 

Resources: - check moment librabry on npmjs.
Time / Effrots : - 1 Day 
Acceptance Criteria: - when you will hit the API for inserting agents a custom_id should be generated for each agents, and they should be unique for each agents.

Ticket 3: - 
title : - Code changes in  `getShiftsByFacility` and `generateReport`

description : -
1. while retriving data in `getShiftsByFacility` make sure you retrive the custom_agent_id too with Agents metadata.
   you need to make change in the query that is facthing records for the `getShiftsByFacility` method. Make sure to include
   the `custom_agent_id` field too while perform select opertaion.
2. In `generateReport` make sure to replace the internal database ids with `custom_agent_id`.

Resources: - check documentation of `getShiftsByFacility` and `generateReport` method. also check sql queries using sequelize too.

Time / Effrots : - 3 Days
Acceptance Criteria : - when a Facility generate the report then in that report custom_agent_id should be visible with respective Agent.
Please write the needful unit tests too.


