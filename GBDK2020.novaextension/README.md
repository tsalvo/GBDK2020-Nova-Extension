
**GBDK2020** extension provides Task integration with **GBDK2020**, with _Clean_, _Build_ and _Run_ commands.

## Entitlements

**GBDK2020** extension requires access to spawn processes, and this is only used to launch the given emulator path in the configuration, when using the _Run_ command.

## System Requirements

**GBDK2020** extension requires the following to be installed on your Mac:

- [GBDK2020](https://github.com/gbdk-2020/gbdk-2020)
- An emulator that can open a ROM with the extension matching the _Run Platform_ configuration field (see *Configuration* section).  This is needed for the _Run_ command to work.

## Project Folder Requirements

1. A `Makefile` that can be run from the root of your project which supports the `make` and `make clean` commands, and `Makefile.targets` (see GBDK2020 cross-platform example project)
2. A `gbdk2020_nova` file in the root of your project directory, or in the `.nova` subfolder of the project. This file can be empty.

## Configuration
GBDK2020 project-related settings can be adjusted from the `Project -> Project Settings...` menu, or by selecting the project name on the toolbar.
- _Project Name_: the name of your project (should match the GBDK2020 build output file name) e.g. `main`
- _Run Platform_: a string containing the the output build file extension that the **GBDK2020** extension will attempt to open with the _Run_ command, e.g. `gb`
- _Emulator Path_: the full path to the emulator binary that can be launched from the command line (e.g. `/Applications/SameBoy.app/Contents/MacOS/SameBoy`). If no `emulator_path` is provided, the command will default to `/usr/bin/open`.
- _Build for Platform_: Checkboxes for building for individual platform(s). If any of these are checked, the Build / Run commands will automatically try to build targets for the selected platform(s) in addition to the platform defined in _Run Platform_.


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
