/* eslint indent: 0 */

/**
 * @fileoverview Rule to flag trailing underscores in variable declarations.
 * @author Matt DuVall <http://www.mattduvall.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var DISALLOWED_VARIABLES = context.options[0] && context.options[0].disallow ? context.options[0].disallow : [];

    //-------------------------------------------------------------------------
    // Helpers
    //-------------------------------------------------------------------------

    /**
     * Check if identifier is present inside the allowed option
     * @param {string} identifier name of the node
     * @returns {boolean} true if its is present
     * @private
     */
    function isNotAllowed(identifier) {
        return DISALLOWED_VARIABLES.some(function(ident) {
            return identifier.indexOf(ident) >= 0;
        });
    }

    /**
     * Check if function has a underscore at the end
     * @param {ASTNode} node node to evaluate
     * @returns {void}
     * @private
     */
    function checkForDisallowedCharactersInString(node, identifier) {
        if (typeof identifier !== "undefined" && isNotAllowed(identifier)) {
            context.report(node, "Unexpected umlaut in \"" + identifier + "\".");
        }
    }

    function checkFunctionDeclaration(node) {
        if (node.id) {
            var identifier = node.id.name;
            checkForDisallowedCharactersInString(node, identifier);
        }
    }
    function checkVariableDeclarator(node) {
        if (node.id) {
            var identifier = node.id.name;
            checkForDisallowedCharactersInString(node, identifier);
        }
    }
    function checkMemberExpression(node) {
        if (node.property) {
            var identifier = node.property.name;
            checkForDisallowedCharactersInString(node, identifier);
        }
    }
    function checkProperty(node) {
        if (node.key) {
            var identifier = node.key.name;
            checkForDisallowedCharactersInString(node, identifier);
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "FunctionDeclaration": checkFunctionDeclaration,
        "VariableDeclarator": checkVariableDeclarator,
        "MemberExpression": checkMemberExpression,
        "Property": checkProperty
    };

};

module.exports.schema = [
    {
        "type": "object",
        "additionalProperties": false
    }
];
