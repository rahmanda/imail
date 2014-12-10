<?php

class UserController extends \BaseController {

	public function __construct(User $user) {
		$this->users = $user;
	}

	public function login() {
		$credentials = Input::all();
		if(Auth::attempt(array('account' => $credentials->account, 'password' => $credentials->password))) {
			return Auth::user();
		} else {
			return 'Invalid credentials';
		}
	}

	public function logout() {
		if(Auth::logout()) {
			return 'Logout success';
		} else {
			return 'Logout failed';
		}
	}
}