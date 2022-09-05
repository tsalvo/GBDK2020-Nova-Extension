
**GBDK2020** extension provides Task integration with **GBDK2020**, with _Clean_, _Build_ and _Run_ commands.

## Entitlements

**GBDK2020** extension requires read access to files, and this is only used to read the `gbdk2020.json` file in your project directory.

## System Requirements

**GBDK2020** extension requires the following to be installed on your Mac:

- [GBDK2020](https://github.com/gbdk-2020/gbdk-2020)
- An emulator that can open a ROM with the extension matching the `gbdk2020-run-platform` field in `gbdk2020.json` in your project.  This is needed for the _Run_ command to work.

## Project Folder Requirements

1. A Makefile that can be run from the root of your project, and Makefile.targets (see GBDK2020 cross-platform example project)
2. A `gbdk2020.json` file in the root of your project directory which specifies the following:
- `gbdk2020-home` the location where `gbdk2020` is installed on your system e.g. `"/opt/gbdk/"`
- `gbdk2020-run-platform` a string containing the the ROM file extension that the GBDK2020 extension will attempt to open with the _Run_ command, e.g. `"gb"`
- `gbdk2020-build-platforms` the target platform(s) to build ROMs for with the _Build_ command e.g. `["gb", "gg"]`. Possible values depend on the makefile and version of GBDK2020 installed on the system.  At this time, the following are supported with the latest GBDK2020: `gb gbc pocket megaduck sms gg`
- `project-name` the name of your target ROM file to be written to.  this must match the `PROJECTNAME` variable in the Makefile.

Example `gbdk2020.json`:
```
{
	"gbdk2020-home": "/opt/gbdk/",
	"gbdk2020-run-platform": "gb",
	"gbdk2020-build-platforms": ["gb", "gg"],
	"project-name": "testgame"
}
```


## Usage

To run **GBDK2020**'s _Clean_ action:

- Click **and hold** the **Build** 🔨 button in the project toolbar;
- Select the **Project → Clean** menu item;
- Press **Shift-Command-K**; or
- Open the command palette and type `clean`

To run **GBDK2020**'s _Build_ action:

- Click the **Build** 🔨 button in the project toolbar;
- Select the **Project → Build** menu item;
- Press **Command-B**; or
- Open the command palette and type `build`

To run **GBDK2020**'s _Run_ action:

- Click the **Run** ▶ button in the project toolbar;
- Select the **Project → Run** menu item;
- Press **Command-R**; or
- Open the command palette and type `run`
