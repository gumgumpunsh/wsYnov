# wsYnov

Groupe : Alexandre Piron, Jeremy Bilger, Nathan Piraux, Evan Lefevre

Conditions préalables
Compte Git
Compte Github ou Gitlab
Compte Aiven
Node.js installé
Étapes

Créer un référentiel Github:

Créez un nouveau référentiel nommé ynov_ws sur la plateforme choisie.
Créer un compte Aiven et configurer les bases de données :

Inscrivez-vous à un compte Aiven si vous n'en avez pas déjà un.
Créez des instances pour les bases de données souhaitées (PostgreSQL, MongoDB, Elasticsearch ou OpenSearch) en utilisant les liens fournis.
Prenez note des détails de connexion pour chaque base de données.
Cloner le référentiel :

Clonez le référentiel ynov_ws sur votre machine locale.
Se connecter aux bases de données :

Utilisez les scripts fournis (node ws_connect_pg.js, node ws_connect_mongodb.js, node ws_connect_elastic.js, node ws_connect_opensearch.js) pour vous connecter aux bases de données respectives en utilisant les détails de connexion obtenus d'Aiven.
Initialiser les tables :

Utilisez les scripts fournis (node ws_dbinit_pg.js, node ws_dbinit_mongodb.js, node ws_dbinit_elastic.js, node ws_dbinit_opensearch.js) pour créer les tables requises dans chaque base de données.
Assurez-vous que les tables ont la structure suivante :
ws_masks (id, name, description, mask_json)
ws_entries (id, id_mask, entry_json)
Effectuer des opérations CRUD :

Utilisez les scripts fournis (node ws_crud_pg.js, node ws_crud_mongodb.js, node ws_crud_elastic.js, node ws_crud_opensearch.js) pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur les données des tables.
Implémentez des fonctions pour chaque opération CRUD pour chaque base de données.
Facultatif : Utiliser un ORM (Object Relational Mapper) :

Choisissez une bibliothèque ORM (par exemple, Sequelize, TypeORM, Mongoose) pour la base de données souhaitée.
Installez la bibliothèque ORM choisie et intégrez-la à votre application Node.js.
Utilisez l'ORM pour simplifier les interactions avec la base de données et modéliser les relations entre les données.
Facultatif : Dockerisation :

Créez un Dockerfile à des fins de développement.
Utilisez Docker Compose pour créer des services pour chaque base de données et l'application Node.js.
Cela permettra un processus de développement et de déploiement plus rationalisé.
Documentation :

Mettez à jour le fichier README avec des instructions détaillées pour chaque étape.
Incluez des captures d'écran ou des diagrammes pour améliorer la clarté.
Tests :

Implémentez des tests unitaires pour l'application Node.js afin de garantir la qualité et la fonctionnalité du code.
Envisagez d'utiliser un framework de test comme Mocha ou Jest.
Déploiement (facultatif) :
Si vous utilisez Docker, déployez l'application conteneurisée sur une plateforme cloud comme Heroku ou Amazon Elastic Container Service (ECS).
Sinon, déployez l'application Node.js sur un serveur ou une plateforme d'hébergement.
Remarques supplémentaires
Les scripts fournis sont des exemples et peuvent nécessiter des modifications en fonction de vos besoins spécifiques.
Assurez-vous d'une gestion correcte des erreurs et de la journalisation tout au long de l'application.
Suivez les meilleures pratiques pour la lisibilité et la maintenabilité du code.
Utilisez le contrôle de version (Git) pour suivre les modifications et collaborer efficacement.
