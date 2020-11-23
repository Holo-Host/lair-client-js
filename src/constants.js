
const $TYPE				= Symbol.for("type");
const $LAIRCLIENT			= Symbol.for("@holo-host/lair-client");


class LairClientError extends Error {
    [$TYPE]				= $LAIRCLIENT;
    [Symbol.toStringTag]		= LairClientError.name;

    static [Symbol.toPrimitive] ( hint ) {
	return hint === "number" ? null : `[${this.name} {}]`;
    }

    constructor ( ...params ) {
	super( ...params );

	if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, this.constructor);
	}

	this.name			= this.constructor.name;
    }

    [Symbol.toPrimitive] ( hint ) {
	return hint === "number" ? null : this.toString();
    }

    toString () {
	return `[${this.constructor.name}( ${this.message} )]`;
    }
}


module.exports = {
    $TYPE,
    $LAIRCLIENT,
    LairClientError,
};
