require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_users_index_url
    assert_response :success
  end

  test "should get create" do
    get api_users_create_url
    assert_response :success
  end

end
