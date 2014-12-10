<?php

class EmailController extends \BaseController {

	public function __construct(Email $emails) {
		$this->emails = $emails;
	}

	public function getByUser() {
		$user = $this->me();
		return $user->emails;
	}

	public function getById($emailId) {
		return $this->messages->byId($emailId)->get();
	}

	public function sendEmail() {
		$email = $this->emails->newInstance(Input::all());
		$email->user()->associate($this->me());
		$email->save();

		return $email;
	}

	public function getUpdates($lastEmailId) {
		return $this->messages->byUser($this->me())->afterId($lastEmailId)->get();
	}

}