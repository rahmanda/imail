<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RecreateTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('account')->unique();
			$table->string('name');
			$table->string('password');
			$table->timestamps();
		});

		Schema::create('emails', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('to');
			$table->string('from');
			$table->string('sender_name');
			$table->string('subject');
			$table->string('email');
			$table->timestamps();
		});

		Schema::table('emails', function(Blueprint $table)
		{
			$table->foreign('to')->references('account')->on('users')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
