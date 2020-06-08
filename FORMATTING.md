# Formatting
This document describes how to format log outputs.

You can use the option `-f` to specify a JSON file containing formatting info.

The structure of the file should be like this:
```json
{
    "constants": {
        "some": "constants",
        "that": "can be used",
        "later": "on",
        "white": 0 // rip for those who like hex, we don't do that here
    },
    "formats": {
        "format1": {
            "title": "Error!",
            "description": "{{=it.message}}",
            "timestamp": "{{=new Date()}}", // yes, you can in fact use JS
            "color": {{#def.white}}
        }
    }
}
```

This file is passed to doT.js for templating before sending. You should [consult the website](http://olado.github.io/doT/) for more details.