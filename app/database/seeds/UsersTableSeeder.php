<?php

class UsersTableSeeder extends Seeder {

	public function run() {
		DB::table('users')->delete();

		User::create(array(
			'account' => 'satellite@mail.com',
			'name' => 'Satellite',
			'password' => Hash::make('satellite')
		));

		User::create(array(
			'account' => 'jarvis@mail.com',
			'name' => 'Jarvis',
			'password' => Hash::make('jarvis')
		));
	}
}