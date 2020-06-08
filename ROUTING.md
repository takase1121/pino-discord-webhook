# Routing
For example you have a lot of destinations and you want to send to some of them based on some condition (eg. Log levels), you can use this.

You can use the option `-r` to specify a JSON file containing the routing details.

The structure of the file should be like this:
```json
{
    routing: [{
        "if": "log.level > 50",
        "to": "url1",
        "format": "format1"
    }, {
        "if": "true", // catches all log
        "to": "url2",
        "format": "default" // default format is ALWAYS available
    }]
}
```