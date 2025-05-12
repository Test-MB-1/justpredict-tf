fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## Android
### android build_and_upload
```
fastlane android build_and_upload
```
Generate android app and distribute to firebase
### android clean
```
fastlane android clean
```
Clean

----

## iOS
### ios create_app
```
fastlane ios create_app
```
Create on developer portal and apple store connect
### ios install_pods
```
fastlane ios install_pods
```
Install pod dependencies
### ios increment_build
```
fastlane ios increment_build
```
Incrementing Build Number
### ios signing
```
fastlane ios signing
```
Sync signing
### ios increment_version
```
fastlane ios increment_version
```
increment version
### ios build_and_upload
```
fastlane ios build_and_upload
```
build

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
