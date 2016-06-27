var r = {}

r.allowedCount = context.getVariable("ratelimit.impose-quota.allowed.count")
r.availableCount = context.getVariable("ratelimit.impose-quota.available.count")
r.class = {}
r.class.allowedCount = context.getVariable("ratelimit.impose-quota.class.allowed.count")
r.class.availableCount = context.getVariable("ratelimit.impose-quota.class.available.count")
r.class.exceedCount = context.getVariable("ratelimit.impose-quota.class.exceed.count")
r.class.totalExceedCount = context.getVariable("ratelimit.impose-quota.class.total.exceed.count")
r.class.usedCount = context.getVariable("ratelimit.impose-quota.class.used.count")
r.datastoreFailOpen = context.getVariable("ratelimit.impose-quota.datastore.fail.open")
r.exceedCount = context.getVariable("ratelimit.impose-quota.exceed.count")
r.expiryTime = context.getVariable("ratelimit.impose-quota.expiry.time")
r.failed = context.getVariable("ratelimit.impose-quota.failed")
r.faultCause = context.getVariable("ratelimit.impose-quota.fault.cause")
r.faultName = context.getVariable("ratelimit.impose-quota.fault.name")
r.identifier = context.getVariable("ratelimit.impose-quota.identifier")
r.totalExceedCount = context.getVariable("ratelimit.impose-quota.total.exceed.count")
r.usedCount = context.getVariable("ratelimit.impose-quota.used.count")
 
response.content = JSON.stringify(r)
response.headers["Content-Type"] = 'application/json'

var resetCount = r.allowedCount
if (r.usedCount !==  1) {
    resetCount = r.availableCount + 1
}
print('r.allowedCount: ' + r.allowedCount)
print('r.availableCount: ' + r.availableCount)
print('resetCount: ' + resetCount)
resetCount = 1
context.setVariable('resetCount', resetCount + '')
