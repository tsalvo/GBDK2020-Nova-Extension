var enable_debug_log;
var project_name;
var output_gb;
var output_gbc;
var output_pocket;
var output_gg;
var output_sms;
var output_megaduck;
var output_nes;
var run_platform;
var emulator_path;
var gbdk_build_platforms;

exports.activate = function() {
    // Do work when the extension is activated
    gbdk_build_platforms = [];
    enable_debug_log = nova.config.get("com.tomsalvo.gbdk2020.enable-debug-log") || false;
    project_name = nova.workspace.config.get('com.tomsalvo.gbdk2020.project-name') || 'main';
    output_gb = nova.workspace.config.get('com.tomsalvo.gbdk2020.build-platform-gb') || true;
    output_gbc = nova.workspace.config.get('com.tomsalvo.gbdk2020.build-platform-gbc') || false;
    output_pocket = nova.workspace.config.get('com.tomsalvo.gbdk2020.build-platform-pocket') || false;
    output_gg = nova.workspace.config.get('com.tomsalvo.gbdk2020.build-platform-gg') || false;
    output_sms = nova.workspace.config.get('com.tomsalvo.gbdk2020.build-platform-sms') || false;
    output_megaduck = nova.workspace.config.get('com.tomsalvo.gbdk2020.build-platform-megaduck') || false;
    output_nes = nova.workspace.config.get('com.tomsalvo.gbdk2020.build-platform-nes') || false;
    run_platform = nova.workspace.config.get('com.tomsalvo.gbdk2020.run-platform') || 'gb';
    emulator_path = nova.workspace.config.get('com.tomsalvo.gbdk2020.emulator-path') || '/usr/bin/open';
    
    if (output_gb || run_platform === 'gb') { gbdk_build_platforms.push('gb'); }
    if (output_gbc || run_platform === 'gbc') { gbdk_build_platforms.push('gbc'); }
    if (output_pocket || run_platform === 'pocket') { gbdk_build_platforms.push('pocket'); }
    if (output_gg || run_platform === 'gg') { gbdk_build_platforms.push('gg'); }
    if (output_sms || run_platform === 'sms') { gbdk_build_platforms.push('sms'); }
    if (output_megaduck || run_platform === 'megaduck') { gbdk_build_platforms.push('megaduck'); }
    if (output_nes || run_platform === 'nes') { gbdk_build_platforms.push('nes'); }
    
    if (enable_debug_log) {
        console.log(`GBDK2020 Extension Config: emulator_path ${emulator_path}, run_platform ${run_platform}, project_name ${project_name}, gbdk_build_platforms ${gbdk_build_platforms}`);
    }
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
        
        task.setAction(Task.Run, new TaskProcessAction(emulator_path, {
            args: [`build/gb/${project_name}.${run_platform}`],
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
    identifier: "gbdk2020",
    name: "GBDK2020"
});

