<?php

class UserController extends \BaseController {

	public function __construct(User $user) {
		$this->users = $user;
	}

	public function login() {

		if(Auth::attempt(array('account' => Input::get('account'), 'password' => Input::get('password')))) {
			return Response::json(Auth::user(), 200);
		} else {
			return Response::json('Invalid email or password', 400);
		}

	}

	public function logout() {
		Auth::logout();
		return Response::json('Logout success', 200);
	}
}