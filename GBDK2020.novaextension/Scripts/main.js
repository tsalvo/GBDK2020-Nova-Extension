var gbdk_path;
var gbdk_run_platform;
var gbdk_build_platforms;
var project_name;


exports.activate = function() {
    // Do work when the extension is activated
    let config_path = nova.workspace.path + "/gbdk2020.json";
    let config_file = nova.fs.open(config_path);
    let file_buffer = config_file.read();
    config_file.close();
    let parsed_json = JSON.parse(file_buffer);
    gbdk_path = parsed_json['gbdk2020-home'] || "/opt/gbdk/";
    gbdk_run_platform = parsed_json['gbdk2020-run-platform'] || "gb";
    gbdk_build_platforms = parsed_json['gbdk2020-build-platforms'] || ["gb"];
    project_name = parsed_json['project-name'] || "debug";
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


class TaskProvider {
    constructor() {
        
    }
    
    provideTasks() {
        
        let task = new Task("GBDK2020");
        task.buildBeforeRunning = true;
                
        task.setAction(Task.Build, new TaskProcessAction('/usr/bin/make', {
            args: gbdk_build_platforms,
            env: {}
        }));
        
        task.setAction(Task.Run, new TaskProcessAction('/usr/bin/open', {
            args: [`build/gb/${project_name}.${gbdk_run_platform}`],
            buildBeforeRunning: true,
            env: {}
        }));
        
        task.setAction(Task.Clean, new TaskProcessAction('/usr/bin/make', {
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

