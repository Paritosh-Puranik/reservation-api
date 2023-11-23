import { Sequelize, DataTypes }from 'sequelize';

import sequelize from '../config/connection.js';


const Reservations = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    betriebId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.TEXT,
    },
    gastId: {
        type: DataTypes.INTEGER,
    },
    peopleCount: {
        type: DataTypes.SMALLINT,
    },
    msg: {
        type: DataTypes.SMALLINT,
    },
    notes: {
        type: DataTypes.SMALLINT,
    },
    tags: {
        type: DataTypes.SMALLINT,
    },
    reservedFor: {
        type: DataTypes.SMALLINT,
    },
    shiftId: {
        type: DataTypes.INTEGER,
    },
    roomId: {
        type: DataTypes.INTEGER,
    },
    stayTime: {
        type: DataTypes.SMALLINT,
    },
    userPerSmsInform: {
        type: DataTypes.TEXT,
    },
    isTablePlan: {
        type: DataTypes.TEXT,
    },
    feedbackHash: {
        type: DataTypes.TEXT,
    },
    feedbackSent: {
        type: DataTypes.TEXT,
    },
    addOns: {
        type: DataTypes.TEXT,
    },
    orderId: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.TEXT,
    },
    hash: {
        type: DataTypes.TEXT,
    },
    locked: {
        type: DataTypes.INTEGER,
    },
    paymentTemplate: {
        type: DataTypes.INTEGER,
    },
    paymentId: {
        type: DataTypes.INTEGER,
    },
    invoice: {
        type: DataTypes.REAL,
    },
    recurrenceId: {
        type: DataTypes.INTEGER,
    },
    source: {
        type: DataTypes.TEXT,
    },
    turnover: {
        type: DataTypes.REAL,
    },
    children: {
        type: DataTypes.INTEGER,
    },
    highChairs: {
        type: DataTypes.INTEGER,
    },
    resHotelId: {
        type: DataTypes.INTEGER,
    },
    referrer: {
        type: DataTypes.TEXT,
    },

}, {tableName: "reservations", timestamps:false});

export default Reservations;