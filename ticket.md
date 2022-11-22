Ticket 1 :-

Title : - Update the `Agents` Table.
Description : - you have to update the `Agents` table and add a new column (`custom_agent_id varchar UNIQUE`) in it.
Implementation Details : - Perform an  `alter table` query (assuming the database is `mysql`).
query is as follows: - ALTER TABLE Agents ADD custom_agent_id varchar .
Resources : - check documentation for alter command in mysql.
Time / Efforts : - 6 Hours (Assuming if you are facing some issue accesing the database tables on dev enviroment)
Acceptance Criteria : - If you perfrom query `desc Agent / describe Agent` query, `custom_agent_id` column should be visible.

Ticket 2 : -

Title : - Change in `Agents` models.
Description :- you have to perform changes for the new column `custom_agent_id` in `Agents` model.
Implementation Details : - Please add information about custom_agent_id column in Agents model.
Resources: - Please refer to the documentation of sequelize or the ORM you are using 