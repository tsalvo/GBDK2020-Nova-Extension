
exports.activate = function() {
    // Do work when the extension is activated
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
            args: ["build/gb/debug.gb"],
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

