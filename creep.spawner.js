/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.spawner');
 * mod.thing == 'a thing'; // true
 */
var creepSpawner = {
    
    run: function() {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    
        if(harvesters.length < 2) {
            Game.spawns['Stryn'].spawnCreep([WORK,CARRY,MOVE], newName('harvester'), {memory: {role: 'harvester'}});
        }
        
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        
        if(builders.length < 1) {
            Game.spawns['Stryn'].spawnCreep([WORK,CARRY,MOVE], newName('builder'), {memory: {role: 'builder'}});
        }
        
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        
        if(upgraders.length < 1) {
            Game.spawns['Stryn'].spawnCreep([WORK,CARRY,MOVE], newName('upgrader'), {memory: {role: 'upgrader'}});
        }
        
        function newName(name) {
            return name + Game.time;
        }
    }
};

module.exports = creepSpawner;