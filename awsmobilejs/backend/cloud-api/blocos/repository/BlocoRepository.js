const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const BLOCO_TABLE_NAME = `${process.env.MOBILE_HUB_DYNAMIC_PREFIX}-Blocos`;

class BlocoRepository {
    static fetchBlocos() {
        return dynamo.query(
            {
                TableName: BLOCO_TABLE_NAME,
                IndexName: 'draft-index',
                ProjectionExpression: 'blocoId, bloco_name, latitude, longitude, picture',
                KeyConditionExpression: 'is_draft = :isDraft',
                ExpressionAttributeValues: {
                    ':isDraft' : 0
                }
            }).promise()
    }
    
    static fetchBloco(id) {
        return dynamo.query(
            {
                TableName: BLOCO_TABLE_NAME,
                KeyConditionExpression: 'blocoId = :blocoId',
                ExpressionAttributeValues: {
                    ':blocoId' : id
                }
            }).promise()
    }
}

module.exports = BlocoRepository