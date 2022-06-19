
var gbdk;
var project_name;

exports.activate = function() {
    // Do work when the extension is activated
    const config_data = require('./gbdk2020.json');
    gbdk = config_data['gbdk2020-home'] || "/opt/gbdk/";
    project_name = config_data['project_name'] || "debug";
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


class TaskProvider {
    constructor() {
        
    }
    
    provideTasks() {
        let task = new Task("GBDK2020");
        
        task.setAction(Task.Build, new TaskProcessAction('/usr/bin/make', {
            args: ["gb"],
            env: {}
        }));
        
        task.setAction(Task.Run, new TaskProcessAction('/usr/bin/open', {
            args: [`build/gb/${project_name}.gb`],
            buildBeforeRunning: true,
            env: {}
        }));
        
        task.setAction(Task.Clean, new TaskProcessAction('usr/bin/make', {
            args: ["clean"],
            env: {}
        }));
        
        return [task];
    }
}


nova.assistants.registerTaskAssistant(new TaskProvider(), {
    identifier: "example-tasks",
    name: "Examples"
});

