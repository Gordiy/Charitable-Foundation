const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});

// define tables
const Carousel = sequelize.define('Carousel', {
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    preview: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

const News = sequelize.define('News', {
    photo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(110),
        allowNull: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

class SocialNetworks extends Model {}
SocialNetworks.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    logo: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING(30), allowNull: false}
}, {
    sequelize,
    modelName: "SocialNetworks"
})

class Contacts extends Model {}
Contacts.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    about: {type: DataTypes.TEXT, allowNull: false, defaultValue: "About Charitry Fund"},
    details: {type: DataTypes.TEXT, allowNull: false}, // there must be reference to another table with rekvisit details
    leaders: {type: DataTypes.TEXT, allowNull: true} // there must be a refenece to another table with Person info and role
}, {
    sequelize,
    modelName: 'Contacts'
})

class SocialNetworksContactsReferences extends Model {}
SocialNetworksContactsReferences.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    contact_id: {
        type: DataTypes.INTEGER,
        refeneces: {
            model: Contacts,
            key: 'id',
        }
    },
    social_networks_id: {
        type: DataTypes.INTEGER,
        refeneces: {
            model: SocialNetworks,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: "SocialNetworksContactsReferences"
})

exports.sequelize = sequelize;