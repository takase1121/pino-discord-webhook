# Routing
For example you have a lot of destinations and you want to send to some of them based on some condition (eg. Log levels), you can use this.

You can add a `routing` section to your config file to use this.

Example:
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