var roleJanitor = {
  /** @param {Creep} creep **/
  run: function(creep) {
    if (creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.repairing = false;
      creep.say("🔄 harvest");
    }
    if (!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
      creep.memory.repairing = true;
      creep.say("🚧 repair");
    }

    if (creep.memory.repairing) {
      var targets = creep.room.find(FIND_MY_STRUCTURES);
      if (targets.length) {
        if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], {
            visualizePathStyle: { stroke: "#ffffff" }
          });
        }
      }
    } else {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
      }
    }
  }
};

module.exports = roleJanitor;
