# wsYnov

Groupe : Alexandre Piron, Jeremy Bilger, Nathan Piraux

Tâches à réaliser :
* Créez un compte/repository sur la plateforme Github ou Gitlab   [ynov_ws]
* Créez un compte sur la plateforme Aiven/Mongodb/Elasticsearch en utilisant les liens fournis.
* Choisissez une ou plusieurs bases de données parmi celles proposées.
* Utilisez Node.js pour créer des scripts :
  - connexion aux bases de données sélectionnées:  [node ws_connect_pg.js][node ws_connect_mongodb.js][node ws_connect_elastic.js][node ws_connect_opensearch.js] etc.
  - de création des tables [node ws_dbinit_pg.js][node ws_dbninit_mongodb.js][node ws_dbinit_elastic.js][node ws_dbinit_opensearch.js] etc.
    - table ws_masks (id, name, description, mask_json)
    - table ws_entries (id, id_mask, entry_json)
  - effectuant des opérations telles que la lecture, l'écriture, la mise à jour, et la suppression de données [node ws_crud_pg.js] [node ws_crud_mongodb.js] [node ws_crud_elastic.js] [node ws_crud_pg.js][node ws_crud_opensearch.js] etc.
    - version SQl demandée
    - utilisant l'ORM   en [option]
  * Docker [Partie optionnelle] :
  - l'utilisation de [Dockerfile] pour le developpment rapide (Docker multistage)
  - création des services basés sur les differentes bases de données utilisant le [docker compose]
