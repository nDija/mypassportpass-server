import OrganizationRepository from '../models/repositories/OrganizationRepository';
import logger from '../log';

/**
 * OrganizationController.js
 *
 * @description :: Server-side logic for managing Organisations.
 */
const OrganizationController = {

    create(req, res) {
        logger.debug(JSON.stringify(req.body));
        OrganizationRepository.create(req.body)
            .then((newOrganisation) => {
                res.json(newOrganisation);
            }).catch((errors) => {
                if (errors.code == 11000) {
                    logger.error(`${errors.message}`);
                    logger.error(`${errors.stack}`);
                    res.status(500).json({"msg": "Organization already exist"});
                } else {
                    logger.error(errors);
                    res.status(500).json('an error has occurred');
                }
             });
    },

    /**
     * OrganizationController.list()
     */
    list(req, res) {
        OrganizationRepository.find()
            .then((organizations) => {
                res.json(organizations);
            }).catch((error) => {
                res.status(500).json({
                    message: 'Error when getting Organisation.',
                    error: error
                });
            });
    }
}

export default OrganizationController;