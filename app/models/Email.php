<?php

class Email extends Eloquent {

	/**
	 * The database table used by Email
	 * @var string
	 */
	protected $table = 'emails';

	/**
	 * Fillable fields in database table
	 * @var array
	 */
	protected $fillable = array('from', 'sender_name', 'email');

	/**
	 * Get single email
	 * @param  mixed $query query
	 * @param  integer $id  email id
	 * @return mixed
	 */
	public function scopeById($query, $id) {
		return $query->where('id', $id);
	}

	/**
	 * Get latest email
	 * @param  mixed $query  query
	 * @param  integer $lastId last email id
	 * @return query
	 */
	public function scopeAfterId($query, $lastId) {
		return $query->where('id', '>', $lastId);
	}

	/**
	 * Get certain user email
	 * @param  query $query query
	 * @param  string $user  email address
	 * @return query
	 */
	public function scopeByUser($query, $user) {
		return $query->where('to', $user->account);
	}
	/**
	 * Define one-to-one relation to User
	 * @return mixed
	 */
	public function user() {
		return $this->belongsTo('User', 'account');
	}
}