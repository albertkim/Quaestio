/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 */

module.exports.models = {

    /***************************************************************************
    *                                                                          *
    * Your app's default connection. i.e. the name of one of your app's        *
    * connections (see `config/connections.js`)                                *
    *                                                                          *
    ***************************************************************************/
    // connection: 'localDiskDb',

    /***************************************************************************
    *                                                                          *
    * How and whether Sails will attempt to automatically rebuild the          *
    * tables/collections/etc. in your schema.                                  *
    *                                                                          *
    * See http://sailsjs.org/#/documentation/concepts/ORM/model-settings.html  *
    *                                                                          *
    ***************************************************************************/

    connection: "localMySQL",
    schema: true,
    
    // Change this field to either:
    //  alter: update schema and preserve data
    //  drop: update schema, reset all data
    //  safe: don't modify the schema from ORM
    
    // Recommended: drop only on first startup, then keep it on alter/safe
    migrate: "alter",

    autoPK: false,
    autoCreatedAt: false,
    autoUpdatedAt: false

};