const Report = require('./Report');

/**
 * Represents EEW(Earthquake Early Warning)
 * @prop {Report} report EEW report
 * @prop {Date} earthquakeTime Earthquake occurrence time
 * @prop {String} regionName name of Erathquake Regeion
 * @prop {String} latitude epicenter latitude
 * @prop {String} longitude epicenter longitude
 * @prop {String} depth
 * @prop {String} maxScale
 * @prop {String} magnitude
 */
class EEW {
	constructor (obj) {
		this.report = new Report(obj.report_id, obj.report_num, obj.report_time);
		this.earthquakeTime = new Date(
			(time => `${time[1]}/${time[2]}/${time[3]} ${time[4]}:${time[5]}:${time[6]}`)
			(obj.origin_time.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/))
		);
		this.regionName = obj.region_name;
		this.latitude = obj.latitude;
		this.longitude = obj.longitude;
		this.depth = obj.depth;
		this.maxScale = obj.calcintensity;
		this.magunitude = obj.magunitude;
		this.is = {
			final: obj.is_final,
			cancel: obj.is_cancel,
			training: obj.is_training
		}
	}
}

module.exports = EEW;